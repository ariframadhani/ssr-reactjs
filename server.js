import 'babel-polyfill'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './src/App'
import bodyParser from 'body-parser'
import Helmet from 'react-helmet'

const app = express()
const PORT = process.env.PORT || 8000

app.use(bodyParser.json())

// publicly available with express static
app.use(express.static('build/public'))

app.get('*', (req, res) => {    
    const context = {}
    const content = ReactDOMServer.renderToString( 
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    )

    const helmet = Helmet.renderStatic()
    const html = `<html>
            <head>
                ${helmet.meta.toString()}
                ${helmet.title.toString()}
            </head>
            <body>
                <div id="root">
                    ${content}
                </div>

                <script src="client_bundle.js"></script>
            </body>
        </html>`
        
    res.send(html)
})

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);  
})
