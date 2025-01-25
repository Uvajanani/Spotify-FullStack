import {v2 as cloudinary} from "cloudinary"
import songModel from "../models/SongModel.js"

const addSong = async(req, res) => {
    try {
        const name = req.body.name
        const desc = req.body.desc
        const album = req.body.album
        const audioFile = req.files.audio[0]
        const imageFile = req.files.image[0]
        
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, {resource_type : "video"})
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type : "image"})
        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`

        const songData = {
            name, 
            desc,
            album,
            image : imageUpload.secure_url,
            file : audioUpload.secure_url,
            duration
        }

        const song = songModel(songData)
        await song.save()

        res.json({success : true, message : "Song added"})

    } catch(error) {
        res.json({success : false, message : "Error"})
    }
}

const listSong = async(req, res) => {
    try {
        const allSongs = await songModel.find({})
        res.json({success : true, songs : allSongs})
    } catch(error) {
        console.log(error)
        res.json({success : false, message : "Error"})
    }
}

const removeSong = async(req, res) => {
    try {
        await songModel.findByIdAndDelete(req.body.id)
        res.json({success : true, message : "Successfully Deleted"})
    } catch(error) {
        console.log(error)
        res.json({success : false, message : "Error"})
    }
}

export {addSong, listSong, removeSong}