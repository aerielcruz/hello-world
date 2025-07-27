const { load } = require("@azure/app-configuration-provider");

const connectionString = 'https://best-practice-ac.azconfig.io'

const getAppConfig = async (name) => {
  try {
    const settings = await load(connectionString);
    return settings.get(name)
  } catch (error) {
    throw error;
  }
}

module.exports = { getAppConfig }