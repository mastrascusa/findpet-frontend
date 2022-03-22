export function getCookie(cookieKey: string) {
    let cookieValue = null
    
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim()
            if (cookie.substring(0, cookieKey.length + 1) === (cookieKey + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(cookieKey.length + 1))
                break
            }
        }
    }

    return cookieValue
}
