"use client"
import { authContext } from '@/Provider/AuthProvider'
import React, { useContext } from 'react'

export default function useAuth() {
      const auth = useContext(authContext);
      return auth ;
}
