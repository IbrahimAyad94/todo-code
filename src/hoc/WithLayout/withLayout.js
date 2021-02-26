import React from 'react'
import Navigation from '../../components/Layout/Navigation/Navigation';
import Footer from '../../components/Layout/Footer/Footer';

 const withLayout = ComponentInstance => {
    return (props) => (
        <React.Fragment>
            <Navigation></Navigation>
                <div style={{minHeight: '800px', overflow: 'auto'}}>
                    <ComponentInstance {...props}/>
                </div>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default withLayout;