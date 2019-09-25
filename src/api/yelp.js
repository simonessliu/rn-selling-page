import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer S1PGaY_CXtQpMAF3yV0yZhEFoHQVszZ1zmrYNK1F3iEx9lcs1dWi5XAGM-PFcm0mCUF-7fGIwBlQjEtv175ELFycDeXV_RYwfzS2fDEf_IYnGUvo3yCwS07HB-uKXXYx'
    }
})

