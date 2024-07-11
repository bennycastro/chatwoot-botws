/**
 * Es la función que importa para guardar mensajes y crear lo necesario
 * @param {*} dataIn Pasando los datos del contacto + el mensaje
 * @param {*} chatwoot dependencia del chatwoot
 */
//const chatwoot = require ('./chatwoot.class')
const handlerMessage = async (dataIn = {phone:'', name:'', message:'', mode:''}, chatwoot ) => {
    //const inbox = await chatwoot.findOrCreateInbox({ name: 'BOTWS' })
    const contact = await chatwoot.findorCreateContact({ from: dataIn.phone, name: dataIn.name })
    const conversation = await chatwoot.findOrCreateConversation({
        inbox_id: 6,
        contact_id: contact.id,
        phone_number: dataIn.phone
    })
    await chatwoot.createMessage ({
        msg: dataIn.message, mode: dataIn.mode, conversation_id: conversation.id
    })

}

module.exports = { handlerMessage }