export default function ({ $axios, $cookies, store }, inject) {

    const api = $axios.create({});

    $axios.onRequest(config => {
        const cookiesId = $cookies.get("cookies-id") || store.state.token
        config.headers.common['Authorization'] = `Bearer ${cookiesId}`;
    })

    $axios.setBaseURL('http://115.240.149.196:4000')

    // Inject to context as $api
    inject('api', api)
}