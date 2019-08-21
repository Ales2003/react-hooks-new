import {useEffect} from 'react'
//common logic
function useDocumentTitle(count) {
     useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle