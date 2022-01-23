// import { useEffect, useState } from 'react'
import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useAuthContext } from '../hooks/useAuthContext'
import { useCollection } from '../hooks/useCollection'

// import { db } from '../firebase/config'
// import { collection, getDocs } from 'firebase/firestore'

export default function Home() {
  // const [books, setBooks] = useState(null)
  const { user } = useAuthContext()
  const { documents: books } = useCollection('books', ['uid', '==', user.uid])

  // useEffect(() => {
  //   const ref = collection(db, 'books')

  //   getDocs(ref).then((snapshot) => {
  //     let results = []
  //     snapshot.docs.forEach((doc) => {
  //       results.push({ id: doc.id, ...doc.data() })
  //     })
  //     setBooks(results)
  //   })
  // }, [])

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  )
}
