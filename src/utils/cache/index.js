import { useEffect, useState } from 'react';

export function createResource(promiseCreator) {
  const _cache = new Map();

  return {
    read(key) {
      if (_cache.has(key)) {
        return _cache.get(key);
      }

      throw promiseCreator(key).then(data => {
        _cache.set(key, data);
      });
    },
    update(key, value) {
      _cache.set(key, value);
    },
    delete(key) {
      _cache.delete(key);
    },
  };
}

export function createFirebaseResource(refCreator) {
  const onceResource = createResource(id =>
    refCreator(id)
      .once('value')
      .then(snapshot => snapshot.val()),
  );

  return {
    read(id) {
      const initialValue = onceResource.read(id);
      const [value, setValue] = useState(initialValue);

      useEffect(() => {
        const ref = refCreator(id);

        function onValue(snapshot) {
          setValue(snapshot.val());
        }

        ref.on('value', onValue);
        return () => {
          onceResource.delete(id);
          ref.off('value', onValue);
        };
      }, [onceResource, refCreator]);

      return value;
    },
  };
}
