import React, { Component } from 'react';
import {
    View,
} from 'react-native';
import { Container, Content, Spinner } from 'native-base';
import { Product } from "./";

class ProductList extends Component {
    
    state = { products: [], isLoading: true };
    componentDidMount() {
        fetch('http://roopeshwedsshruti.com/reactNativeApp/get_all_product.php')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                isLoading: false,
                products: responseJson,
            }, function(){
                console.log(this.products)
            });

        })
        .catch((error) =>{
            console.error(error);
        });
    }
    renderProducts() {
        return this.state.products.map(product => 
            <Product key={product.id} productData={product} />
        );
    }
    renderLogin() {
        return <Spinner />
    }
    render() {
        console.log(this.state);
        return (
            // <Container>
            //     <Content>
                    <View style={style.container}>
                        { this.state.isLoading ? this.renderLogin() : this.renderProducts() }
                    </ View>
            //     </Content>
            // </Container>
        );
    }
}

const style = {
    container :{ 
        padding: 10,
        // flexWrap: 'wrap',
        // flex: 1,
        // justifyContent: 'space-between',
        // flexDirection: 'row'
    }
};
export {ProductList};