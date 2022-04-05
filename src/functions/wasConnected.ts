import toast from "react-hot-toast"

export function setWasConnected(was_connected: boolean) {
    window.localStorage.setItem('was_connected', `${was_connected}`)
}

export function checkWasConnected() {
    if (window.localStorage.getItem('was_connected') === 'true') {
        toast.error('Sua sessão expirou, por favor faça o login novamente.', {
            style: {
                backgroundColor: 'rgb(222, 219, 176)',
                textAlign: 'center'
            }
        })
    }
}
