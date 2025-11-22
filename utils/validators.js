function isSafeId(id) {
  return id && /^[a-zA-Z0-9_-]+$/.test(id);
}

module.exports = { isSafeId };
