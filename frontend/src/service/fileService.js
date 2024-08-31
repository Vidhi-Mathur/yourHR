export const fileUploadHandler = async(formDataResume) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/upload-resume`, {
            method: 'POST',
            body: formDataResume
        })
        if(!response.ok){
            throw new Error('Failed to upload resume')
        }
        const result = await response.json()
        return result.filePath 
    }
    catch(err) {
        throw new Error(`${err.message} || Failed to upload resume`)
    }
}