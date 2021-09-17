
export const fileUpload = async (file) => {

    const cloudUrl = `https://api.cloudinary.com/v1_1/datrkzch3/upload`;

    // Usar formData para enviar request de ficheros y parametros
    const formData = new FormData();
    formData.append('upload_preset', 'udemy-react-journal');
    formData.append('file', file);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if (resp.ok) {
            const cloudResp = await resp.json();
            // Una URL que nos da la data con nuestra misma imagen 
            //pero distinta url para asegurar la subida
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }

    } catch (err) {
        throw err;
    }
}