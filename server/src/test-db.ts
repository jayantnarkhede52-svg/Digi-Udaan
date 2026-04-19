import 'dotenv/config';
import { db } from './firebase';

async function testConnection() {
    console.log("Testing Firestore connection...");
    try {
        const snapshot = await db.collection('testimonials').get();
        console.log("Success! Found testimonials length:", snapshot.docs.length);
    } catch (e: unknown) {
        if (e instanceof Error) {
            console.error("FIREBASE ERROR:", e.message);
            console.error("STACK:", e.stack);
        } else {
            console.error("FIREBASE ERROR:", e);
        }
    }
}

testConnection();
