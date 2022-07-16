import styles from './PageTitle.module.scss';

const PageTitle = (props) => {
  return (
    <div className={styles.title}>
      {props.children}
    </div>
  );
};

export default PageTitle;