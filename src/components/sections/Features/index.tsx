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
      <section className="px-10 my-16 md:px-15 md:my-20 lg:px-20 lg:my-26 xl:px-35">
          <div className="bg-[#D9D9D9] rounded-lg py-10 container mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
              <div className="max-w-4xl mx-auto text-center">
                  <h1 className="text-2xl sm:text-4x font-bold text-primary">
                      CONHEÇA NOSSAS APLICAÇÕES!
                  </h1>
                  <p className="text-sm mt-8 text-primary lg:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est eius voluptatum soluta magni deserunt corrupti voluptates neque molestias aperiam rerum? Fuga iusto eos porro at tempore quidem et officiis nostrum.
                  </p>
              </div>
              
              <div className="mt-12 max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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

