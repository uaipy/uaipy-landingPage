import Card from "@/components/ui/Card";
import { Feature } from "@/lib/Features";
import { useCallback, useEffect, useState } from "react";
import { AxiosError } from "axios";
import featuresData from './features.json';

export const Features = () => {

    const [features, setFeatures] = useState<Feature[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchFeatures = useCallback(async () => {
        try {
            setIsLoading(true);
            // const response = await featuresService.getFeatures();
            
            const formattedFeatures = featuresData.features.map((feature) => ({
                ...feature,
                external: true
            }));
            
            const typedFeatures = formattedFeatures.map(feature => ({
                ...feature,
                icon: feature.icon as Feature['icon']
            }));
            
            setFeatures(typedFeatures);
            setError(null);
        } catch (err) {
            if (err instanceof AxiosError) {
                setError(err.response?.data?.message || 'Erro ao carregar features');
            } else {
                setError('Ocorreu um erro inesperado');
            }
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchFeatures();
    }, [fetchFeatures]);


    if (isLoading) {
        return (
            <section className="bg-zinc-500 py-8">
                <div className="container mx-auto text-center">
                    <p>Carregando...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="bg-zinc-500 py-8">
                <div className="container mx-auto text-center">
                    <p className="text-destructive">{error}</p>
                </div>
            </section>
        );
    }

    return (
      <section className="bg-zinc-500 py-8 sm:py-12 md:py-16 px-4">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-3xl sm:text-4xl font-bold text-primary">
                      CONHEÇA NOSSAS APLICAÇÕES!
                  </h1>
                  <p className="text-base sm:text-lg mt-4 text-primary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius voluptatum soluta magni deserunt corrupti voluptates neque molestias aperiam rerum? Fuga iusto eos porro at tempore quidem et officiis nostrum.
                  </p>
              </div>
              
              <div className="mt-16 max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                      {features.map((feature) => (
                          <Card key={feature.id}>
                              <Card.Header>
                                  <Card.Header.Title title={feature.title} icon={feature.icon} />
                              </Card.Header>
                              <Card.Body>
                                  <p>{feature.description}</p>
                              </Card.Body>
                          </Card>
                      ))}
                  </div>
              </div>
          </div>
      </section>
    );
};

