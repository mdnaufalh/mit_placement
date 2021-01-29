import Student from "../../../common/types/Student";

class ProfileService {
  static API: string = "http://localhost:7000/student/profile/";

  async saveChangeRequest(student: Student): Promise<void> {
    await ProfileService.fetchVoid("change/", { student });
  }
  async fetchProfile(): Promise<Student> {
    return ProfileService.fetch("fetch/", {});
  }

  static async fetch(url: string, payload: any): Promise<any> {
    try {
      const res = await fetch(ProfileService.API + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentId: 1, collegeId: 1 }),
      });
      return res.json();
    } catch (e) {
      alert(e);
    }
  }

  static async fetchVoid(url: string, payload: any): Promise<any> {
    try {
      await fetch(ProfileService.API + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload, studentId: 1, collegeId: 1 }),
      });
    } catch (e) {
      alert(e);
    }
  }
}

export default new ProfileService();
