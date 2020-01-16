module.exports = {  

    //define an entry point
    entry: './src/index.js',

    //define output point
    output: {
        path:'/EPAM/EPAM_Task_Manager_PP-master/EPAM_Task_Manager_PP/dist',
        filename: 'bundle.js'
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: [[
                        '@babel/preset-env',
                        {
                          targets: {
                            browsers: ["IE 11"],
                          },
                        useBuiltIns: 'usage', 'corejs': 2
                        }
                ]]
                }
            }
        ]
    }
};