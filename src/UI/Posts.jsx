import React from "react";
import styles from "../CSS/PostsStyles.module.css";

export const Posts = () => {
    return(
        <>  
            <div className={styles.post}>
                <div className={styles.post__content}>
                    <strong>1. Java Script</strong>
                    <div>Java Script - programming language</div>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>
        </>
    )
}