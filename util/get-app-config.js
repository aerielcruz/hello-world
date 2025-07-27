const { load } = require("@azure/app-configuration-provider");

const connectionString = process.env.AZURE_APP_CONFIG_CONNECTION_STRING

const getAppConfig = async (name) => {
  try {
    const settings = await load(connectionString);
    return settings.get(name)
  } catch (error) {
    throw error;
  }
}

module.exports = { getAppConfig }