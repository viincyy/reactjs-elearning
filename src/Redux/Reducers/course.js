import { FETCH_COURSE_DETAIL } from "../Actions/type";
import { FETCH_COUSES } from "../Actions/type";
let initialState = {
  courses: [],
  courseDetail: null,
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUSES: {
      state.courses = action.payload;
      return { ...state };
    }
    case FETCH_COURSE_DETAIL: {
      state.courseDetail = action.payload;
      return { ...state };
    }
    default: {
      return state;
    }
  }
};

export default CourseReducer;
