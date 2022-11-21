function submitData() {

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    console.log(name, email, phone, subject, message)



    if (name == "") {
        return alert('Mohon untuk mengisi nama anda terlebih dahulu')
    } else if (email == "") {
        return alert('Mohon untuk mengisi email anda terlebih dahulu')
    } else if (phone == "") {
        return alert('Mohon untuk mengisi nomor telepon yang dapat dihubungi')
    } else if (subject == "") {
        return alert('Pilih job anda terlebih dahulu')
    } else if (message == "") {
        return alert('Mohon isi pesan anda terlebih dahulu')
    }

    let link = document.createElement('a')
    link.href = `mailto:${email}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak nomer saya di ${phone}`
    link.click()


    let student = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(student)

}

