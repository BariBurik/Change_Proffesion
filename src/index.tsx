import App from "@/components/App/App"
import {createRoot} from 'react-dom/client'
import { setupStore } from "./store/store"
import { Provider } from "react-redux"

const store = setupStore()

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')  
}

const container = createRoot(root)

container.render(
    <Provider store={store}>
        <App />
    </Provider>
)