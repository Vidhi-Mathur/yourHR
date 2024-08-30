export const fileUploadHandler = async(formDataResume) => {
    try {
        const response = await fetch('https://yourhr-tc9o.onrender.com/upload-resume', {
            method: 'POST',
            body: formDataResume
        })
        if (!response.ok) {
            throw new Error('Failed to upload resume');
        }
        const result = await response.json();
        return result.filePath; 
    }
    catch(err) {
        console.error('Error uploading resume:', err);
        return;
    }
}