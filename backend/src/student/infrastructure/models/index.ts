import bookshelf from "./dbConnection";

export const student = bookshelf.model("student", {
  tableName: "student",
  college() {
    return this.belongsTo(college, "college", "id");
  },
  course() {
    return this.belongsTo(course, "course", "id");
  },
  roundStatus() {
    return this.hasMany(roundStatus, "student", "id");
  },
  studentChangeRequest() {
    return this.hasOne(studentChangeRequest, "id", "id");
  },
});

export const studentChangeRequest = bookshelf.model("studentChangeRequest", {
  tableName: "studentChangeRequest",
  college() {
    return this.belongsTo(college, "college", "id");
  },
  course() {
    return this.belongsTo(course, "course", "id");
  },
  id() {
    return this.belongsTo(student, "id", "id");
  },
});

export const college = bookshelf.model("college", {
  tableName: "college",
  students() {
    return this.hasMany(student, "college", "id");
  },
  interviews() {
    return this.hasMany(interview, "college", "id");
  },
  departments() {
    return this.hasMany(department, "college", "id");
  },
});

export const course = bookshelf.model("course", {
  tableName: "course",
  department() {
    return this.belongsTo(department, "department", "id");
  },
  students() {
    return this.hasMany(student, "course", "id");
  },
  interview() {
    return this.belongsToMany(
      interview,
      "interviewCourseMap",
      "course",
      "interview",
      "id",
      "id"
    );
  },
});

export const department = bookshelf.model("department", {
  tableName: "department",
  courses() {
    return this.hasMany(course, "department", "id");
  },
  college() {
    return this.belongsTo(college, "college", "id");
  },
});

export const interview = bookshelf.model("interview", {
  tableName: "interview",
  college() {
    return this.belongsTo(college, "college", "id");
  },
  rounds() {
    return this.hasMany(round, "interview", "id");
  },
  roundStatus() {
    return this.hasMany(roundStatus, "interview", "id");
  },
  courses() {
    return this.belongsToMany(
      course,
      "interviewCourseMap",
      "interview",
      "course",
      "id",
      "id"
    );
  },
});

export const round = bookshelf.model("round", {
  tableName: "round",
  interview() {
    return this.belongsTo(interview, "interview", "id");
  },
});

export const roundStatus = bookshelf.model("roundStatus", {
  tableName: "roundStatus",
  interview() {
    return this.belongsTo(interview, "interview", "id");
  },
  student() {
    return this.belongsTo(student, "student", "id");
  },
});
