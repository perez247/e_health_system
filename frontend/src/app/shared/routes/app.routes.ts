
export class AppRoutes {

    static generateRoutes() {

        return {

            public: {
                path: `public`,
                name: `public`,


                //  Sign in page
                signIn: {
                    name: `signin`,
                    path: `public/signin`
                },

                // Forgotten Password
                forgottenPassword: {
                    name: `forgotten-password`,
                    path: `public/forgotten-password`
                },

                // Change Password
                changePassword: {
                    name: `change-password`,
                    path: `public/change-password`
                }

            },

            private: {
                name: `private`,
                path: `private`,

                // Dashboard
                dashboard: {
                    name: `dashboard`,
                    path: `private/dashboard`,
                },

                // Patients
                patients: {
                    name: `patients`,
                    path: `private/patients`,
                },

                // Single Patient
                patient: {
                    name: `patient/:id`,
                    path: `private/patient`
                },

                //  Staffs
                staffs: {
                    name: `staffs`,
                    path: `private/staffs`,
                },

                // Single Staff
                staff: {
                    name: `staff/:id`,
                    path: `private/staff`
                }
            }

        }

    }

}
