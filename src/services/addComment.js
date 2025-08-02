import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export const addComment = async ({ blogId, author, email, comment }) => {
  try {
    await addDoc(collection(db, 'comments'), {
      blogId,
      author,
      email,
      comment,
      createdAt: serverTimestamp(),  // Firestore server zaman damgası
    });
  } catch (error) {
    console.error("Yorum eklenemedi:", error);
    throw error;  // İstersen hata yönetimi için dışa atabilirsin
  }
};
