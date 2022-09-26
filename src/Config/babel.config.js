module.exports = {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-typescript",
        "@babel/preset-react"
    ],
    "plugins": [
        ["@babel/plugin-proposal-export-default-from"],
        ["@babel/plugin-syntax-dynamic-import"],
        ["@babel/plugin-syntax-jsx"],
        ["@babel/plugin-transform-arrow-functions"],
        ["@babel/plugin-transform-runtime"],
        ["@babel/plugin-proposal-private-methods"],
        ["@babel/plugin-proposal-throw-expressions"],
        ["@babel/plugin-proposal-class-properties"],
        ["@babel/plugin-transform-literals"],
        ["@babel/plugin-transform-async-to-generator"],
        ["@babel/plugin-transform-typescript"]
    ],
    "ignore": [
        "*/Client"
    ]
}
