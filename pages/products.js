import Card from '@/components/Card';
import { Container, Grid } from '@mui/material';
import axios from 'axios';

const products = ({data}) => {

    console.log(data);
    return (
        <Container>
            <div className='search'></div>
            <Grid container spacing={4}>
                {data && data.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card
                            image={product.images}
                            title={product.title}
                            description={product.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}


export const getServerSideProps = async () => {
    const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    const data = response.data;
    return {
        props: {data}
    }
}

export default products