import { FETCH_FAQS_REQUEST, FETCH_FAQS_SUCCESS, FETCH_FAQS_FAILURE } from './actionTypes';

// Action to fetch FAQ data
export const fetchFaqs = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_FAQS_REQUEST });

    try {
      const faqsCollection = collection(getFirestore(), "faqs");
      const querySnapshot = await getDocs(faqsCollection);

      const faqs = [];
      querySnapshot.forEach((doc) => {
        faqs.push(doc.data());
      });

      dispatch({ type: FETCH_FAQS_SUCCESS, payload: faqs });
    } catch (error) {
      dispatch({ type: FETCH_FAQS_FAILURE, error: error.message });
    }
  };
};
