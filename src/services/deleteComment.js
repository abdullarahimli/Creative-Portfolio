import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase';

// Yorum silme fonksiyonu
export const deleteComment = async (commentId) => {
  try {
    await deleteDoc(doc(db, "comments", commentId));
    console.log("Yorum silindi:", commentId);
  } catch (error) {
    console.error("Yorum silinirken hata oluştu:", error);
  }
};
