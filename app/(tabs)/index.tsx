// app/index.tsx
import { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { getRecipes } from '../../lib/api/recipies'
import { Recipe } from '../../lib/models/types'

export default function Index() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data, error } = await getRecipes()
      
      console.log('Data:', data)
      console.log('Error:', error)
      
      if (error) {
        setError(error.message)
      } else if (data) {
        setRecipes(data)
      }
      setLoading(false)
    }

    fetchRecipes()
  }, [])

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Načítavam...</Text>
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Chyba: {error}</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Recepty ({recipes.length})</Text>
      
      {recipes.map(recipe => (
        <View key={recipe.id} style={styles.card}>
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
          <Text>Kategória: {recipe.categories?.name || 'žiadna'}</Text>
          <Text>Obtiažnosť: {recipe.difficulty}</Text>
          <Text>Čas: {recipe.prep_time_minutes} min</Text>
          <Text>Tagy: {recipe.recipe_tags?.map(rt => rt.tags?.name).join(', ') || 'žiadne'}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
})