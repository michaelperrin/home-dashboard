module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": "off",
        "react/prefer-stateless-function": "off",
        "react/require-default-props": "off"
    },
    "env": {
        // Avoids the following messages:
        // > 'document' is not defined. (no-undef)
        "browser": true,

        "node": true,

        // Avoids the following messages:
        // > 'it' is not defined. (no-undef)
        "jest": true
    }
};
