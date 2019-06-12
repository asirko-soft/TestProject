package com.ubs.common;


import java.io.*;
import java.util.Properties;

class ConfigProvider {

    private Properties configProperties = initProperties();
    private final String URI = getProperty("uri");

    public String getURI() {
        return URI;
    }

    private Properties initProperties() {
        if (configProperties == null) {
            configProperties = new Properties();
            File propsFile = new File("C:\\Sources\\TestProject\\src\\test\\resources\\config.properties");
            InputStream stream = null;
            try {
                stream = new FileInputStream(propsFile);
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            }
            try {
                configProperties.load(stream);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return configProperties;
    }

    private String getProperty(String propertyName) {
        return configProperties.getProperty(propertyName);
    }
}
