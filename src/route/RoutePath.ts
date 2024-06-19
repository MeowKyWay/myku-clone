export enum AdminRoutePath {
    FACULTY = '/std/admin/faculties',
    DEPARTMENT = '/std/admin/departments',
    TEACHER = '/std/admin/teachers',
    STUDENT = '/std/admin/students'
}

export enum TeacherRoutePath {
    SUBJECT = '/std/teacher/subjects',
    SUBJECT_SECTION = '/std/teacher/subjects/section/:id',
    SUBJECT_ANNOUNCEMENT = '/std/teacher/subjects/announcements',
}