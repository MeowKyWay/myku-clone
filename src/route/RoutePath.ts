export enum AdminRoutePath {
    FACULTY = '/std/admin/faculties',
    DEPARTMENT = '/std/admin/departments',
    TEACHER = '/std/admin/teachers',
    STUDENT = '/std/admin/students'
}

export enum TeacherRoutePath {
    MYSUBJECT = '/std/teacher/subjects',
    MYSUBJECT_SECTION = '/std/teacher/subjects/section/:id',
    MYSUBJECT_ANNOUNCEMENT = '/std/teacher/subjects/announcements',
}