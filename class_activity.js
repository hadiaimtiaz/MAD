export default function counter() {
    const [count, setCount] = useState(0);

    return(
    <View style={styles.container}>
          <Text style={styles.counterText}>Counter: {count}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Increase" onPress={() => setCount(count + 2)} />
            <Button title="Decrease" onPress={() => setCount(count - 2)} />
            <Button title="Reset" onPress={() => setCount(0)} />
          </View>
        </View>
    )
}
