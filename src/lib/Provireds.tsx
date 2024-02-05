import { store } from '@/redux/store';
import { Provider } from 'react-redux'


const Provireds = ({children}:{children:React.ReactNode}) => {
    return (
        <Provider store={store}>
            {children}
       </Provider>
    );
};

export default Provireds;