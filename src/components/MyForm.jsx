import { Formik, Form, Field, ErrorMessage } from "formik";
import { motion } from "framer-motion";
import styles from "@styles/form.module.css";

function MyForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    actions.setSubmitting(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "El nombre es requerido";
    }
    if (!values.email) {
      errors.email = "El email es requerido";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "El email no es valido";
    }
    return errors;
  };

  return (
    <div className={styles.form_container}>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles.form}>
            <div className={styles.form_row}>
              <div className={styles.form_field}>
                <Field type="text" name="name" placeholder="Tu nombre" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.error_message}
                />
              </div>
              <div className={styles.form_field}>
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className={styles.error_message}
                />
              </div>
            </div>
            <div className={styles.form_field}>
              <Field
                as="textarea"
                name="message"
                placeholder="Mensaje"
                className={styles.message_area}
              />
            </div>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={styles.cta}
              whileTap={{ scale: 0.9 }}
            >
              Envia tu mensaje
            </motion.button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MyForm;
