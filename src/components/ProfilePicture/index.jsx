import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ProfilePicture() {
  const [avatarUrl, setAvatarUrl] = useState('')

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/Guilherme-RNovaes')
        setAvatarUrl(response.data.avatar_url)
      } catch (error) {
        console.error('Erro ao obter a foto de perfil:', error)
      }
    }

    fetchProfileData()
  }, [])

  return (
    <div>
      {avatarUrl && <img src={avatarUrl} alt='ProfilePicture' />}
    </div>
  )
}

export default ProfilePicture