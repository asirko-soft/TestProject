package com.ubs.common;


import java.io.*;
import java.util.Properties;

public class ConfigProvider {

    Properties configProperties = initProperties();

    public String getURI() {
        return URI;
    }

    final String URI = getProperty("uri");

    Properties initProperties() {
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

    String getProperty(String propertyName) {
        return configProperties.getProperty(propertyName);
    }
}
