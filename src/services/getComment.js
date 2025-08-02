import { db } from '../firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';

export const getCommentsByBlogId = async (blogId) => {
  try {
    const q = query(
      collection(db, 'comments'),
      where('blogId', '==', blogId),
      orderBy('createdAt', 'asc')
    );

    const querySnapshot = await getDocs(q);
    const comments = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return comments;
  } catch (error) {
    console.error("Yorumlar alınamadı:", error);
    return [];
  }
};
