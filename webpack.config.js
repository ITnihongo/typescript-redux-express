const path = require('path');

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
        extensions: ['.tsx','ts','js']
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};