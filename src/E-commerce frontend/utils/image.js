const generateBase64 = imageFile => {
    const reader = new FileReader()
    const promise = new Promise((resolve, reject) => {
        reader.onload = e => resolve(e.target.result);
        reader.onerror = err => reject(err)
    })
    reader.readAsDataURL(imageFile)
    return promise
}

export default generateBase64