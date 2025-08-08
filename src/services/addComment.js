import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const addComment = async ({ blogId, author, email, comment }) => {
  try {
    await addDoc(collection(db, 'comments'), {
      blogId,
      author,
      email,
      comment,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Yorum eklenemedi:", error);
    throw error; 
  }
};
