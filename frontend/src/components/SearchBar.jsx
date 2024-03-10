import styles from "./SearchBar.module.css";

export default function SearchBar({ searchString, onSearchStringChanged }) {
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={searchString}
        onChange={(e) => onSearchStringChanged(e.target.value)}
        placeholder="🔍 Search for todos here"
      />
    </div>
  );
}
