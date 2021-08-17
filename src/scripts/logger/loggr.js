export const createLoger = (name) => {
  const logs = [];

  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },
    error(errorText) {
      logs.push(`error - ${name} - ${errorText}`);
    },
    getLogos() {
      return logs;
    },
  };
};
